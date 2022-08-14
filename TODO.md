## Q&A:

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
    - Adding styles emotion/react vs sass

## TODO:

    - Configure @emotion/react so it works without /** @jsxImportSource @emotion/react */ comment
    - Move App.scss to @emotion/react globals
    - Team.js: convert <li> into <teammember> component
    - Team.js: convert into <list> component which receive a list of components to be render like <teammember>
    - Media.js: move to <medialist> component like <team>
    - Prettier sometimes sucks: is there a better option out there?
            <div
                css={css` <----- why is this in a new line?
                @media screen and (min-width: 64rem) {
                    margin: 0 auto;
                    width: 50%;
                }`}>
                <h3 css={title}>{props.title}</h3> <----- This is formatted in line line which OK but the anchor not,
                                                          What makes the different
                <p css={css`margin-bottom: 1.25rem;`}>{props.content}</p>
                <a href={props.actionhref} target='_blank' rel='noreferrer' css={anchor}> <----- This is formatted in multiple
                                                                                                 lines which NOT OK
                    {props.actiontext}
                </a>
                {props.subtitle && ( <--- I don't like the operator at this level...Maybe I will never realize that the <p> is the second condition
                    <p
                        css={css` <-------------- SUUUUCK!!!!
                            color: #aeaeae;
                            display: block;
                            font-size: 0.8rem;
                            margin: 0 auto;
                        `}>
                        {props.subtitle}
                    </p>
                )}
            </div>

            <Route path='/' element={<Align />} /> <----- Why is the whitespace required before the '/>'???? Come oooooon!!!!
            <Route path='/align' element={<Align />} />
            <Route path='/flow' element={<Flow />} />
            <Route path='/layer' element={<Layer />} />
            <Route path='/line' element={<Line />} />
            <Route path='/curve' element={<Curve />} />
            <Route path='/space' element={<Space />} />
            <Route path='/grid' element={<Grid />} />
            <Route path='/point' element={<Point />} />
