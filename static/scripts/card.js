const elements = [
    {
        rating: 1,
        body_title: "Things that are included",
        things: [
            {
                thing: "network middle"
            },
            {
                thing: "web applicationm"
            },
            {
                thing: "password"
            }
        ],
        arggs: [
            {
                argg: "+ CyberRunner() override"
            }
        ]
    },
    {
        rating: 3,
        body_title: "Things that are included",
        things: [
            {
                thing: "network middle"
            },
            {
                thing: "web applicationm"
            },
            {
                thing: "password"
            }
        ],
        arggs: [
            {
                argg: "+ CyberRunner() override"
            }
        ]
    }]

class Generator {
    constructor(data, parrent) {
        this.rating = data.rating
        this.body_title = data.body_title
        this.things = data.things
        this.arggs = data.arggs
        this.parrent = document.getElementsByClassName(parrent)[0]
        this.data = data
        this.init()
    }

    init() {
        const element = generator(this.data)
        this.parrent.appendChild(element)

    }

}

var  generator = (card) => {

    this.rating = card.rating
    this.body_title = card.body_title
    this.things = card.things
    this.arggs = card.arggs

    const package = document.createElement('div')
    package.className = 'package'

    const header = document.createElement('div')
    header.className = 'package_header'

    package.appendChild(header)

    const sp = document.createElement('span')
    sp.innerHTML = 'package'

    header.appendChild(sp)

    const package_rating = document.createElement('div');
    package_rating.className = 'package_rating'

    header.appendChild(package_rating)

    for (let i = 1; i <= this.rating; i++) {
        const star = document.createElement('div');
        star.innerHTML = `star ${i}`
        package_rating.appendChild(star)
    }

    const body = document.createElement('div')
    body.className = 'body';

    package.appendChild(body)

    const package_body_title = document.createElement('span')
    package_body_title.className = 'package_body_title'
    package_body_title.innerHTML = this.body_title

    body.appendChild(package_body_title)

    const ul = document.createElement('ul')

    this.things.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = item.thing
        ul.appendChild(li)
    })
    body.appendChild(ul)
    const package_body_args = document.createElement('div')
    package_body_args.className = 'package_body_args'
    body.appendChild(package_body_args)

    this.arggs.forEach(item => {
        const dv = document.createElement('div')
        dv.innerHTML = item.argg
        package_body_args.appendChild(dv)
    })

    return package
}




//new Generator(elements[0], 'body').bind(this)
