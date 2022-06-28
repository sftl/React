Q&A:
----
    - Component props: classic way
        <HeroBanner title = 'Design better'
                    content = 'Lorem ipsum dolor'
                    actiontext = 'Add to Chrome'
                    actionhref = 'https://www.google.com/'
                    subtitle = 'Firefox and Safari soon.'
                    banner = 'media.png'/>
        VS
        const _ = [
            'Design better',
            'Lorem ipsum dolor',
            'Add to Chrome',
            'https://www.google.com/',
            'Firefox and Safari soon.',
            'media.png',
        ]
        <HeroBanner hb = {_}/>


TODO:
------
    - Configure @emotion/react so it works without /** @jsxImportSource @emotion/react */ comment
    - Move App.scss to @emotion/react globals
    - Team.js: convert <li> into <teammember> component
    - Team.js: convert into <list> component which receive a list of components to be render like <teammember>
    - Media.js: move to <medialist> component like <team>
