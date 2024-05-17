let quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        auther: " Oscar Wilde",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        auther: " Marilyn Monroe",
        image: "https://images.gr-assets.com/quotes/1511992603p2/8630.jpg"

    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        auther: " Albert Einstein",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg"

    },
    {
        quote: `You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.`,
        auther: " William W. Purkey",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1282396130i/1744830._UX200_CR0,47,200,200_.jpg"

    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        auther: " William W.Purkey",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1282396130i/1744830._UX200_CR0,47,200,200_.jpg"

    },
    {
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        auther: " J.K. Rowling, Harry Potter and the Goblet of Fire",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1596216614i/1077326._UX200_CR0,15,200,200_.jpg"

    },
    {
        quote: `Don’t walk in front of me… I may not follow
        Don’t walk behind me… I may not lead
        Walk beside me… just be my friend`,
        auther: " Albert Camus",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1686463588i/957894._UY200_CR46,0,200,200_.jpg"

    },
    {
        quote: `Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .`,
        auther: " C.S. Lewis, The Four Loves",
        image: "https://images.gr-assets.com/quotes/1387503187p8/10554.jpg"

    },
    {
        quote: " A friend is someone who knows all about you and still loves you.",
        auther: " Elbert Hubbard",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1216826209i/114059._CR0,24,200,200_.jpg"

    },
    {
        quote: " Be the change that you wish to see in the world.",
        auther: " Mahatma Gandhi",
        image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1356810912i/5810891._UX200_CR0,21,200,200_.jpg"

    },

]



let num = 0;


function newQuote() {
    let cartona = ""
    let random = Math.floor(Math.random() * quotes.length)
    if (random != num) {
        cartona = `
        
        <div class="col-3 d-grid justify-content-center">
        <div class="image rounded-circle m-auto">
            <img src="${quotes[random].image}"
                class="rounded-circle w-100" alt="quote" class="img-fluid">
        </div>
        <p class="auther text-start mt-4">
       ${quotes[random].auther}
        </p>

    </div>
    <div class="col-9 ">

        <div class="contain shadow p-4">
            <p class="blockquote">
            "${quotes[random].quote}"
            </p>
        </div>


    </div>
        
        
        
       <!-- 
        <div class="container text-center  fw-bold">
        <p class="blockquote">
             "${quotes[random].quote}"
        </p>
        <p class="auther">
           _ ${quotes[random].auther}
        </p>
    </div>
    -->
    `
        document.getElementById("quote").innerHTML = cartona;
        num = random;
    }
    else {
        newQuote();
    }







}