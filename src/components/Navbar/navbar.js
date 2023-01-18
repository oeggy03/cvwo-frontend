import React from 'react';

const Navbar = () => {
    return (
        <nav class="db dt-l w-100 border-box pa3 ph5-l">
            <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" class="dib w2 h2 br-100" alt="CVWO"/>
                <title class="dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</title>
            </a>
            <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
                <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="About">About</a>
                <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Profile">Profile</a>
            </div>
        </nav>
    )
}

export default Navbar;
