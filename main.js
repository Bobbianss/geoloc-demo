document.addEventListener('DOMContentLoaded', (event) => {
    let testEntityAdded = false;
    let camera = document.querySelector("[gps-new-camera]");
    let scene;
    let entity;

    if (camera) {
        camera.addEventListener("gps-camera-update-position", e => {
            if (!testEntityAdded) {
                alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
                
                // Add a box to the north of the initial GPS position
                entity = document.createElement("a-gltf-model");
                entity.setAttribute("scale", {
                    x: 20, 
                    y: 20,
                    z: 20
                });
                entity.setAttribute("src", "models/musicband-bear/scene.gltf");
                entity.setAttribute('gps-new-entity-place', {
                    latitude: 45.0673153,
                    longitude: 7.6515326
                });

                scene = document.querySelector("a-scene");
                if (scene) {
                    
                    scene.appendChild(entity);
                }

                testEntityAdded = true;
            }
        });
    } else {
        console.error("L'elemento camera non è stato trovato!");
    }

    console.log("scene=", scene);
    console.log("camera=", camera);
    console.log("entity=", entity);
});
