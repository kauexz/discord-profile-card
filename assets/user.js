window.onload = function () {
   fetch("https://api.lanyard.rest/v1/users/348321064738095104")
      .then((response) => response.json())
      .then((w) => {
         const info = w.data.discord_user;
         const profileImg = document.querySelector(".profile-img");
         const displayElement = document.querySelector(".name");
         const nameElement = document.querySelector(".description");
         profileImg.src = info.avatar ? `https://cdn.discordapp.com/avatars/${info.id}/${info.avatar}.${info.avatar.startsWith("a_") ? "gif" : "png"}?size=4096` : "https://cdn.discordapp.com/embed/avatars/1.png";
         displayElement.textContent = info.display_name;
         nameElement.textContent = info.username;
      })
      .catch((error) => {});
};