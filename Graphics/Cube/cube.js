// Crear una escena básica
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Crear los bordes del cubo
const edges = new THREE.EdgesGeometry(geometry); // Geometría de bordes
const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Color negro para los bordes
const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
scene.add(edgeLines); // Agregar bordes a la escena

        camera.position.z = 2;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02;

            edgeLines.rotation.x += 0.02; // Rotar también los bordes
            edgeLines.rotation.y += 0.02;
            renderer.render(scene, camera);
        }

        animate();