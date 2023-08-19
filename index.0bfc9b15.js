const e=document.getElementById("app"),t=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),a=await t.json(),i=a?.map(e=>`
      <article class="Card">
        <img src="${e.images[0]}" alt="">
        <h2>
          ${e.title} <small>Precio $ ${e.price}</small>
        </h2>
      </article>
    `).join(""),s=document.createElement("section");s.classList.add("items"),s.innerHTML=i,e.appendChild(s)};t();
//# sourceMappingURL=index.0bfc9b15.js.map
