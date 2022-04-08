import { Component } from "react";
import * as THREE from "three";
import classes from "./ThreeScene.module.css";
import vertexShader from "./shaders/vertexShader.vert";
import fragmentShader from "./shaders/fragmentShader.frag";

class ThreeScene extends Component {
  componentDidMount() {
    var container;
    var camera, scene, renderer;
    let uniforms;

    let loader = new THREE.TextureLoader();
    let texture;
    loader.setCrossOrigin("anonymous");
    loader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png",
      function do_something_with_texture(tex) {
        texture = tex;
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.minFilter = THREE.LinearFilter;
        init();
        animate();
      }
    );

    function init() {
      container = document.getElementById("container1");

      camera = new THREE.Camera();
      camera.position.z = 1;
      scene = new THREE.Scene();
      var geometry = new THREE.PlaneBufferGeometry(2, 2);
      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_noise: { type: "t", value: texture },
        u_mouse: { type: "v2", value: new THREE.Vector2() },
      };
      var material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });
      material.extensions.derivatives = true;
      var mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio / 5);

      container.appendChild(renderer.domElement);

      onWindowResize();
      window.addEventListener("resize", onWindowResize, false);

      document.addEventListener("pointermove", (e) => {
        let ratio = window.innerHeight / window.innerWidth;
        uniforms.u_mouse.value.x =
          (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
        uniforms.u_mouse.value.y =
          ((e.pageY - window.innerHeight / 2) / window.innerHeight) * -1;

        e.preventDefault();
      });
    }

    function onWindowResize(_event) {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function animate(delta) {
      requestAnimationFrame(animate);
      renderDataHere(delta);
    }

    function renderDataHere(delta) {
      uniforms.u_time.value = delta * 0.0005;
      renderer.render(scene, camera);
    }
  }

  render() {
    return (
      <>
        <div key={1} id="container1" className="container" />
      </>
    );
  }
}

export default ThreeScene;
