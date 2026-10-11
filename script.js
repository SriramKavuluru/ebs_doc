const books = [

{
title: "C Programming on Raspberry Pi",
file: "books/C Programming on Raspberry Pi - Develop innovative -- Dogan Ibrahim; Elektor-Verlag GmbH.pdf"
},

{
title: "FreeCAD for Electronics Applications",
file: "books/FreeCAD for Electronics Applications- Practical Introduction -- Thomas Duden -- ( WeLib.org ).pdf"
},

{
title: "Innovate with Sense HAT for Raspberry Pi",
file: "books/Innovate with Sense HAT for Raspberry Pi 45 Sensor Projects -- Dogan Ibrahim.pdf"
},

{
title: "KiCad 6 Like A Pro Volume 1",
file: "books/KiCad 6 like a pro [Volume 1], Fundamentals and projects - -- Peter Dalmaris; Elektor-Verlag GmbH -- ( WeLib.org ).pdf"
},

{
title: "KiCad 6 Like A Pro Volume 2",
file: "books/KiCad 6 like a pro [Volume 2], Projects, tips, and recipes - -- Peter Dalmaris -- ( WeLib.org ).pdf"
},

{
title: "Logic Analyzers in Practice",
file: "books/Logic Analyzers in Practice- PC USB Logic Analyzers with -- Jörg Rippel.pdf"
},

{
title: "Motor Control Projects with Arduino and Raspberry Pi",
file: "books/Motor-control-projects-with-arduino-raspberry-pi.pdf"
},

{
title: "Multitasking with Raspberry Pi",
file: "books/Multitasking with Raspberry Pi Team-IRA -- Dogan Ibrahim.pdf"
},

{
title: "Node RED and Raspberry Pi Pico W",
file: "books/Node RED and Raspberry Pi pico W.pdf"
},

{
title: "PID Based Practical Digital Control",
file: "books/PID-based Practical Digital Control with Raspberry Pi and -- Ibrahim, Dogan.pdf"
},

{
title: "Raspberry Pi 5 Essentials",
file: "books/Raspberry Pi 5 Essentials- Program, build, and master over -- Dogan Ibrahim.pdf"
},

{
title: "Raspberry Pi Pico Essentials",
file: "books/Raspberry Pi Pico Essentials- Program, Build, and Master -- Dogan Ibrahim.pdf"
},

{
title: "Raspberry Pi Pico W",
file: "books/Raspberry Pi Pico W - Program, build, and master 60+ -- Dogan Ibrahim.pdf"
},

{
title: "Technical Modeling with OpenSCAD",
file: "books/Technical Modeling with OpenSCAD- Create Models for 3D -- Tam Hanna.pdf"
},

{
title: "The CAN Bus Companion",
file: "books/The CAN Bus companion prj with Arduino & Raspberry pi.pdf"
},

{
title: "The Raspberry Pi Zero 2 W GO! Book",
file: "books/The Raspberry Pi Zero 2 W GO! Book- A Fast-Lane Ride From -- Dogan Ibrahim.pdf"
},

{
title: "Using Displays in Raspberry Pi Projects",
file: "books/Using Displays in Raspberry Pi projects.pdf"
}

];

const container = document.getElementById("bookContainer");

function displayBooks(bookList) {

    container.innerHTML = "";

    bookList.forEach(book => {

        let card = document.createElement("div");

        card.className = "book-card";

        card.innerHTML = `
            <div class="book-title">${book.title}</div>

            <div class="actions">
                ${book.file}
                   Read Online
                </a>

                ${book.file}
                   Download
                </a>
            </div>
        `;

        container.appendChild(card);

    });
}

function searchBooks() {

    let value =
        document.getElementById("searchBox")
        .value
        .toLowerCase();

    let filtered =
        books.filter(book =>
        book.title.toLowerCase().includes(value));

    displayBooks(filtered);
}

displayBooks(books);