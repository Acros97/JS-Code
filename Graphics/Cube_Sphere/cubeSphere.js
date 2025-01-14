// Crear una escena básica
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000); // 60 = posición z
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // verde
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(-2,0,0);
        scene.add(cube);

        // Crea los bordes del cubo
        const edges = new THREE.EdgesGeometry(geometry); // Geometría de bordes
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Color negro para los bordes
        const edgeLines = new THREE.LineSegments(edges, edgeMaterial);
        edgeLines.position.set(-2,0,0); // Misa posición que el cubo
        scene.add(edgeLines); // Agregar bordes a la escena


        // Esfera
        const geometrySph = new THREE.SphereGeometry(1, 32, 32); // Radio: 1, segmentos: 32
        const materialSph = new THREE.MeshStandardMaterial({ 
                color: 0xff0000, 
                roughness: 0.5,
                metalness: 0.8
        
        }); // Material con respuesta a luz
        const sphere = new THREE.Mesh(geometrySph, materialSph); 
        sphere.position.set(2, 0, 0);        
        scene.add(sphere); // Agregar la esfera a la escena

        // Luz para apreciar la rotación
        const light = new THREE.PointLight(0xffffff,80,100); // 80: intensidad de la luz
        light.position.set(1,2,5);
        scene.add(light);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.02; // Rotación cubo
            edgeLines.rotation.x += 0.02; // Rotación bordes
            edgeLines.rotation.y += 0.02;
            sphere.rotation.y += 0.02; // Rotación esfera
            sphere.rotation.x += 0.005;

            
            renderer.render(scene, camera);
        }

        animate();