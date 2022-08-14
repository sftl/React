const data = {
    header: {
        logo: {src: 'logo.svg', alt: 'Logo'},
        button: {href: '#', text: 'Add to Chrome'},
    },
    heroBanner1: {
        title: 'Design better',
        content: `Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore
                  magna aliqua ullamco laboris nisi.`,
        actiontext: "Add to Chrome — It's free",
        actionhref: 'https://www.google.com/',
        subtitle: 'Firefox and Safari soon.',
        banner: 'media.png',
    },
    heroBanner2: {
        title: 'Design better',
        content: `Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore
                  magna aliqua ullamco laboris nisi.`,
        actiontext: "Add to Chrome — It's free",
        actionhref: 'https://www.google.com/',
        subtitle: 'Firefox and Safari soon.',
        banner: 'media.png',
    },
    parentList: {list: ['facebook.svg', 'pinterest.svg', 'stripe.svg', 'dribbble.svg', 'behance.svg']},
    media: [
        {
            title: 'Nice Features',
            content: `Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore
                      magna aliqua ullamco laboris nisi.`,
            img: 'media.png',
            bulletpoints: [
                'Unlimited domain names.',
                '150+ components.',
                'Lifetime updates.',
                '24/7 technical support.',
            ],
        },
        {
            title: 'Nice Features',
            content: `Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore
                      magna aliqua ullamco laboris nisi.`,
            img: 'media.png',
            reverse: true,
            bulletpoints: [
                'Unlimited domain names.',
                '150+ components.',
                'Lifetime updates.',
                '24/7 technical support.',
            ],
        },
        {
            title: 'Nice Features',
            content: `Lorem ipsum dolor sit amet, consectetur lit, enimad eiusmod tempor incididunt ut labore et dolore
                      magna aliqua ullamco laboris nisi.`,
            img: 'media.png',
            bulletpoints: [
                'Unlimited domain names.',
                '150+ components.',
                'Lifetime updates.',
                '24/7 technical support.',
            ],
        },
    ],
    team: {
        name: 'Wall of Love',
        description: 'Lorem ipsum dolor sit amet',
        itemsperrow: 3,
        list: [
            {
                img: 'avatar.svg',
                alt: 'Jane Doe image',
                description: `“Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt
                              labore dolore magna.”`,
                name: 'Jane Doe',
                position: 'CEO of Company',
            },
            {
                img: 'avatar.svg',
                description: `“Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt
                              labore dolore magna.”`,
                name: 'Jane Doe',
                position: 'CEO of Company',
            },
            {
                img: 'avatar.svg',
                description: `“Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt
                              labore dolore magna.”`,
                name: 'Jane Doe',
                position: 'CEO of Company',
            },
            {
                img: 'avatar.svg',
                description: `“Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt
                              labore dolore magna.”`,
                name: 'Jane Doe',
                position: 'CEO of Company',
            },
            {
                img: 'avatar.svg',
                description: `“Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt
                              labore dolore magna.”`,
                name: 'Jane Doe',
                position: 'CEO of Company',
            },
            {
                img: 'avatar.svg',
                description: `“Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt
                              labore dolore magna.”`,
                name: 'Jane Doe',
                position: 'CEO of Company',
            },
        ],
    },
    footer: {
        left: '© 0000 Uisual',
        center: [
            {href: '#', text: 'Features'},
            {href: '#', text: 'Help'},
            {href: '#', text: 'Terms'},
        ],
        right: [
            {
                href: '#',
                text: (
                    <svg
                        viewBox='0 0 24 24'
                        height='16'
                        width='16'
                        fill='none'
                        stroke='#AEAEAE'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        role='img'
                        aria-label='#'>
                        <path
                            d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5
                                     13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                ),
            },
            {
                href: '#',
                text: (
                    <svg
                        viewBox='0 0 24 24'
                        height='16'
                        width='16'
                        fill='none'
                        stroke='#AEAEAE'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        role='img'
                        aria-label='#'>
                        <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
                        <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01'></path>
                    </svg>
                ),
            },
            {
                href: '#',
                text: (
                    <svg
                        viewBox='0 0 24 24'
                        height='16'
                        width='16'
                        fill='none'
                        stroke='#AEAEAE'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        role='img'
                        aria-label='#'>
                        <circle cx='12' cy='12' r='10'></circle>
                        <path
                            d='M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88
                                     5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32'></path>
                    </svg>
                ),
            },
        ],
    },
}

export default data
