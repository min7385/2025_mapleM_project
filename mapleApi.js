fetch("https://openapi.nexon.com/v1/maplestorym/characters?character_name=꼬마윈브&world_name=엘리시움", {
    method: "GET",
    headers: {
      "x-nxopen-api-key": "test_48f1edee9673d86e745e8b581a27b23387bf78764bb06fc2c99559d08939eae8efe8d04e6d233bd35cf2fabdeb93fb0d"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
  