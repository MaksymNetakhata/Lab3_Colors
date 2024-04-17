const Footer = () => {
    return(
        <>
        <div className="mt-80 w-screen h-285 bg-secondary flex justify-center">
            <div className="w-128 mt-10 font-barlow font-bold tracking-wider flex flex-row">
                <div className="w-240">
                <h4 className="mb-5">SHARE</h4>
                <ul className="font-semibold text-sm tracking-tight">
                    <li className="h-7">
                        <a href="" target="_blank">
                            Send via e-mail</a></li> 
                            <li className="h-7">
                                <a href="" target="_blank">
                                    Share on Twitter</a></li> 
                                    <li className="h-7">
                                        <a href="" target="_blank">Share on Facebook</a>
                                        </li> 
                                        <li className="h-7"><a href="" target="_blank">Share on Google Plus</a>
                                        </li> 
                                        <li className="h-7"><a href="" target="_blank">
                                            Share on LinkedIn</a>
                                            </li>
                                        </ul>
                </div>
                <div className="w-240">
                <h4 className="mb-5">MORE</h4>
                <ul className="font-semibold text-sm tracking-tight">
                    <li className="h-7">
                        <span>👋</span>
                        &nbsp;&nbsp;&nbsp;Contact Me
                    </li>
                    <li className="h-7" ></li>
                    <li className="h-7">
                    <span>📩</span>
                    &nbsp;&nbsp;&nbsp;Subscribe
                    </li>
                    <li className="h-7">
                    <span>🎉</span>
                    &nbsp;&nbsp;&nbsp;Submit
                    </li>
                    <li className="h-7">
                    <span>🤙</span>
                    &nbsp;&nbsp;Replay Onboarding
                    </li>
                </ul>
                </div>
                <div className="w-[400px]">
                <h4 className="mb-5">ABOUT</h4>
                <ul className="font-semiblod text-sm tracking-tight">
                    <li className="h-7"><p>Flat UI Colors 2 brought to you by Ahmet Sulek.</p></li>
                    <li className="h-7"><a href="http://twitter.com/ahmetsulek" target="_blank" className="underline">Follow me on Twitter</a> or <a href="/subscribe" className="underline">Subscribe</a> to be the first to know</li>
                    <li className="h-7">when I launch new products.</li>
                    <li className="h-7"></li>
                    <li className="h-7">Read the <a href="https://medium.com/collect-ui-design-ui-ux-inspiration-blog/flat-ui-colors-2-13-countries-13-designers-13-color-palettes-more-1d0ecdd66301" target="_blank" className="underline">article on Medium</a> to learn more</li>
                </ul>
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer;