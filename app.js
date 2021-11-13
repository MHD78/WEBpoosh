class Product {
    constructor(image, secondryImage, title, price, colors, sizes) {
        this.image = image;
        this.secondryImage = secondryImage;
        this.title = title;
        this.price = price;
        this.colors = colors;
        this.sizes = sizes;
    }
}

class ProdList {
    ProductList = [];
    avilable = [37, 38, 40, 41, 42, 44, 45, 46, 48, 50];
    assetsAdress = ['1599053532_p-medium.jpg', '1599917607_p-medium.jpg', '1599917612_p-medium.jpg',
        '1604322762_p-medium.jpg', '1604507261_p-medium.jpg', '1604831245_p-medium.jpg', '1604906135_p-medium.jpg',
        '1604907819_p-medium.jpg', '1607259883_p-medium.jpg', '1607512086_p-medium.jpg', '1607767538_p-medium.jpg',
        '1610345601_p-medium.jpg', '1610353896_p-medium.jpg', '1610366048_p-medium.jpg', '1613570408_p-medium.jpg',
        '1613572564_p-medium.jpg', '1613806422_p-medium.jpg', '1614158171_p-medium.jpg', '1614512391_p-medium.jpg',
        '1614521522_p-medium.jpg', '1615206350_p-medium.jpg', '1618465887_p-medium.jpg', '1618469762_p-medium.jpg',
        '1618482193_p-medium.jpg', '1618721949_p-medium.jpg', '1622441579_p-medium.jpg', '1622442407_p-medium.jpg',
        '1622442939_p-medium.jpg', '1622443739_p-medium.jpg', '1622445033_p-medium.jpg', '1622448554_p-medium.jpg',
        '1622540766_p-medium.jpg'
    ].forEach(item => {
        const sizes = [];
        let rand = Math.floor(Math.random() * (10 - 1)) + 1;
        for (let i = 0; i < rand; i++) {
            sizes.push(this.avilable[i])
        }

        const asa = new Product(`./images/main/${item}`, `./images/main/${item.slice(0, 10)}other_file_0-medium.jpg`, `شلوار جین مردانه  ${item.slice(0, 9)}`, "554,000 تومان", `./images/main/${item}.croped.jpg`, sizes);
        this.ProductList.push(asa);
    })

    pass() {
        return this.ProductList.sort((x, y) => { return y.sizes.length - x.sizes.length });

    }
}

class MainRender {
    static instance(item) {
        const main = document.getElementById("card");
        const template = document.getElementById("item__template");
        const templateBody = document.importNode(template.content, true);
        const inside = templateBody.querySelector("div");
        inside.dataset.item = item.title;
        const Prosec = inside.querySelector("section");
        const ProImg = Prosec.querySelectorAll("img");

        ProImg[0].src = item.image;
        ProImg[1].src = item.secondryImage;
        ProImg[1].style.display = "none";

        // const quick = document.createElement("section");
        // quick.innerHTML = `
        //     <span>مشاهده سریع</span>
        //     <i class="fas fa-search"></i>
        // `;
        // quick.className = "quick__show";
        // quick.id = "qBTN"
        ProImg.src = item.image;
        inside.addEventListener('mouseenter', () => {
            ProImg[0].style.display = "none";
            ProImg[1].style.display = "block";
            if (window.innerWidth >= 1024) {
                // Prosec.append(quick);
                Prosec.lastElementChild.style.visibility = "visible"
                ex[2].style.visibility = "visible"
                ex[3].style.visibility = "visible"
            }
        });
        inside.addEventListener('mouseleave', () => {
            ProImg[0].style.display = "block";
            ProImg[1].style.display = "none";
            if (window.innerWidth >= 1024) {
                // Prosec.removeChild(quick)
                Prosec.lastElementChild.style.visibility = "hidden"
                ex[2].style.visibility = "hidden"
                ex[3].style.visibility = "hidden"
            }
        });
        console.log(innerWidth)
        const inDiv = inside.querySelector("div");
        const ex = inDiv.querySelectorAll("*");
        ex[0].innerText = item.title;
        ex[1].innerText = item.price;
        ex[2].src = item.colors;
        item.sizes.forEach(element => {
            const add = document.createElement("li");
            add.innerText = element;
            ex[3].append(add);
        });

        main.append(templateBody);
    }
}
class ModalRender {
    static instance(item) {
        const main = document.getElementById("productModal");
        const template = document.getElementById("modal__template");
        const templateBody = document.importNode(template.content, true);
        const inside = templateBody.querySelectorAll("section");
        // inside[0].append(document.createElement("i").className = "fas fa-close")
        const modalSec = document.createElement("img");
        modalSec.src = item.secondryImage;
        inside[0].append(modalSec)
        const modalFir = document.createElement("img");
        modalFir.src = item.image;
        inside[1].append(modalFir);
        const detail = inside[2].querySelectorAll("section");
        detail[0].querySelector("h3").innerText = item.title;
        detail[0].querySelector("h4").innerText = item.price;
        detail[1].querySelector("img").src = item.colors;
        item.sizes.forEach(it => {
            const nItem = document.createElement("li")
            nItem.innerText = it
            detail[1].querySelector("ul").append(nItem)
        })
        main.append(templateBody);
        inside[0].querySelector("i").addEventListener("click", () => { main.querySelectorAll("section").forEach(el => { el.remove() }) })
    }
}
class Final {
    static init() {
        const og = new ProdList;
        og.pass().forEach(item => {
            MainRender.instance(item);
        })
    }
}

Final.init();
const prodList = new ProdList;
const vvv = prodList.pass();
document.getElementById("show__menu").addEventListener('click', (ev) => { document.getElementById("mobile__menu").style.width = "100%"; document.body.style.overflowY = "hidden" })
document.getElementById("close").addEventListener('click', () => { document.getElementById("mobile__menu").style.width = "0"; document.body.style.overflowY = "scroll" })
document.getElementById("main").addEventListener('click', () => { document.getElementById("mobile__menu").style.width = "0"; })
document.querySelectorAll("#qck").forEach(el => {
    el.addEventListener("click", (ev) => {
        const prodName = ev.currentTarget.closest("div").dataset.item
        vvv.forEach(pro => {
            if (prodName === pro.title) {
                ModalRender.instance(pro)
                document.getElementById("productModal").style.top = `${ev.pageY - ev.offsetY}px`
                console.log(ev)

                document.getElementById("productModal").style.display = "grid"
            }
        })
    })
})




let click = 0;
const tops = document.getElementById("top");
const closeBTN = document.getElementById("closeBTN");
closeBTN.addEventListener('click', () => {
    if (click % 2 === 0) {
        tops.style.height = "auto"
        tops.style.boxShadow = "none"
        closeBTN.innerHTML = "<i class='fas fa-caret-up'></i>بستن"
    } else {
        closeBTN.innerHTML = "<i class='fas fa-caret-down'></i>بیشتر"
        tops.style.height = "200px"
        tops.style.boxShadow = "#e6e5e5 0px -50px 56px -28px inset"
    }
    click++
})
