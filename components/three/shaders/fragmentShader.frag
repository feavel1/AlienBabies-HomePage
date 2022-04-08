uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_noise;
uniform sampler2D u_environment;
vec2 movement;
float scale = 5.;

vec2 hash2(vec2 p) {
  vec2 o = texture2D(u_noise, (p + 0.5) / 256.0, -100.0).xy;
  return o;
}

const int octaves = 8;
const float rotational = .1;
const float sscale = 1.;

float sinnoise(vec3 loc, float t) {
  t += u_time;
  float s = (sin(t) * .5 + .5);
  float c = (sin(t * 2.5) * .5 + .5);

  vec3 p = loc;

  float _c = cos(float(p.y * rotational));
  float _s = sin(float(p.x) * rotational);
  mat2 mat = mat2(_c, -_s, _s, _c);

  for(int i = 0; i < octaves; i++) {
    p += cos(p.yxz * 1. + vec3(0., t * 5., 10.6)) * (.1 + s * .2);
    p += sin(p.yxz + vec3(cos(t * .5), .1, 0.)) * (.5 - c * .1);
    p *= 1. + s * .1;

    p.xy *= mat;
  }

  return length(sin(p * .5) * 2.);
}

float bumpMap(vec2 uv, float height, float t) {
  float bump = sinnoise(vec3(uv, 1.), t);
  return bump * height;
}

vec4 renderPass(vec2 uv, vec2 uvoffset) {

  float tm = .1;
  float os = .02;

  vec3 surfacePos = vec3(uv, 0.0);

  vec2 sampleDistance = vec2(.001, -0.00);

  float fx = bumpMap(surfacePos.xy - sampleDistance.xy, 1., 0.);
  float fy = bumpMap(surfacePos.xy - sampleDistance.yx, 1., 0.);
  float f = bumpMap(surfacePos.xy, 1., 0.);

  float fx1 = bumpMap(surfacePos.xy - sampleDistance.xy + fx * os, 1., 1. * tm);
  float fy1 = bumpMap(surfacePos.xy - sampleDistance.yx + fy * os, 1., 1. * tm);
  float f1 = bumpMap(surfacePos.xy + f * os, 1., 1. * tm);

  float fx2 = bumpMap(surfacePos.xy - sampleDistance.xy - fx * os, 1., 2. * tm);
  float fy2 = bumpMap(surfacePos.xy - sampleDistance.yx - fy * os, 1., 2. * tm);
  float f2 = bumpMap(surfacePos.xy - f * os, 1., 2. * tm);

  float freq = (f + fx + fy);
  float freq1 = (f1 + fx1 + fy1);
  float freq2 = (f2 + fx2 + fy2);
  freq = freq * freq;
  freq1 = freq1 * freq1;
  freq2 = freq2 * freq2;
        // return vec4( 1. - smoothstep(80., 110., freq) );
        // return vec4( freq1 / 80., freq2 / 90., freq / 70., 1. );
  return vec4(freq2 / 80., freq / 100., freq1 / 80., 1.);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.y, u_resolution.x);

  float _c = cos(0.785398);
  float _s = sin(0.785398);
  mat2 mat = mat2(_c, -_s, _s, _c);
  uv *= mat;

  uv *= scale * sscale;
        // uv.x += 2.;

  vec4 render = renderPass(uv, vec2(0.)) * .9;

  gl_FragColor = render;
}