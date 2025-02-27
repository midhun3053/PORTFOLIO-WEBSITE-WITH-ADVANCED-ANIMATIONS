document.addEventListener("DOMContentLoaded", () => {
    // GSAP Animations
    gsap.from(".hero-title", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
    gsap.from(".hero-subtitle", { duration: 1.5, y: 50, opacity: 0, ease: "power2.out", delay: 0.5 });
    gsap.from(".hero-btn", { duration: 1.5, scale: 0.8, opacity: 0, ease: "back.out(1.7)", delay: 1 });

    // Three.js Scene Setup
    const canvas = document.getElementById("heroCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.01;
        sphere.rotation.x += 0.005;
        renderer.render(scene, camera);
    }

    animate();

    // Responsive Canvas
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});

