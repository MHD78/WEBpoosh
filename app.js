class Product {
    constructor(image, title, price, colors, sizes) {
        this.image = image;
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

        const asa = new Product(`./images/main/${item}`, `شلوار جین مردانه  ${item.slice(0, 9)}`, "554,000 تومان", `./images/main/${item}.croped.jpg`, sizes);
        this.ProductList.push(asa);
    })

    pass() {
        return this.ProductList;

    }
}

class MainRender {
    static instance(item) {
        const main = document.getElementById("card");
        const template = document.getElementById("item__template");
        const templateBody = document.importNode(template.content, true);
        const inside = templateBody.querySelector("div");
        const Prosec = inside.querySelector("section");
        const ProImg = Prosec.querySelector("img");

        const quick = document.createElement("section");
        quick.innerHTML = `
            <span>مشاهده سریع</span>
            <i class="fas fa-search"></i>
        `;
        quick.className = "quick__show";
        ProImg.src = item.image;
        inside.addEventListener('mouseenter', () => {
            ProImg.src = `${item.image.slice(0, 24)}other_file_0-medium.jpg`
            if (window.innerWidth >= 1024) {
                Prosec.append(quick);
                ex[2].style.visibility = "visible"
                ex[3].style.visibility = "visible"
            }
        });
        inside.addEventListener('mouseleave', () => {
            ProImg.src = `${item.image}`
            if (window.innerWidth >= 1024) {
                Prosec.removeChild(quick)
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
class Final {
    static init() {
        const og = new ProdList;
        og.pass().forEach(item => {
            MainRender.instance(item);
        })
    }
}

Final.init();


