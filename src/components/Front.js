import React from 'react'
import BckImg from "./images/kids_background.jpg"
import "./Style/front.css"

function Front() {
    return (

        <div className="container">
            <div className="home_main row m-auto">
                <div className=" col-lg-12 col-md-12 col-sm-10 ml-0">
                    <div class="row mt-2 mb-2">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-8">
                                    <div className="row">
                                        <img className="img_logo" src="https://www.vhv.rs/dpng/d/493-4939983_camera-logo-png-hd-download-transparent-png.png" alt="" />
                                    </div>
                                    <div className="row">
                                        <small className="text2">alignment along <br />the main axis. It <br />helps distribute</small>
                                    </div>
                                </div>
                                <div className="col-1"></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="card text-white">
                                <img src={BckImg} className="card-img" />
                                {/* <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* #################################################### */}



            <div className="row m-auto mt-2">
                <div className="col-lg-10 col-md-12 col-sm-10 m-auto">
                    {/* <div class="row"> */}
                    <div className="break-dgn mb-2 mt-2"></div>
                    {/* <hr className="break" style={{ height: '7px' }} /> */}
                    <div className="textcap">
                        <small className="medium_text">Junte-se ao nosso chamado</small>
                    </div>
                    <div className="textsmall">
                        <span className="small_text">
                            The height and width properties do not include padding, borders, or margins. It sets
                            the height/width of the area inside the padding, border, and margin of the element.
                                </span>
                    </div>
                    {/* </div> */}
                </div>
            </div>

            {/* ------video part----------- */}
            <div className="row m-0 mt-4 mb-2">
                <div className="col-lg-11 col-md-12 col-sm-12 m-auto">
                    <div className="video_div text-center">
                        <iframe className="video" src="https://www.youtube.com/embed/3CRSF69PJD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                </div>
            </div>

            {/* ------------image with details------------- */}
            <div className="row m-auto">
                <div className="col-lg-10 col-md-12 col-sm-10 m-auto">
                    <div className="break-dgn mb-2 mt-2"></div>
                    <div className="textcap">
                        <small className="medium_text">
                            Junte-se ao nosso chamado
                        </small>
                    </div>
                    <div className="textsmall">
                        <span className="small_text">
                            The height and width properties do not include padding, borders, or margins. It sets
                            the height/width of the area inside the padding, border, and margin of the element.
                            rather than set the individual properties. The shorthand sets the other values intelligently.
                        </span>
                    </div>
                    {/* -------------------carasouel----------------------------- */}


                    <div className="row m-0 mt-2 mb-2">
                        <div className="carousel col-lg-10 col-md-12 col-sm-12 m-auto">
                            {/* <div className="carousel text-center"> */}
                            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10">
                                <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                                        {/* <button className="h-10 pr-0" id="pre-btn">{'<'}</button> */}
                                    </div>
                                </div>
                                <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
                                    <section
                                        id="slider"
                                        className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
                                    >
                                        <input type="radio" name="slider" id="s1" defaultChecked="false" />
                                        <input type="radio" name="slider" id="s2" defaultChecked="true" />
                                        <input type="radio" name="slider" id="s3" defaultChecked="false" />
                                        <label htmlFor="s1" id="slide1">

                                            <img className="fea" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc4ldWgEOkaCEYz-UkHUHJH__WoIKcs_p6wzY1BQr5KX5lE0f_P9sKPw_Ysj_68T6ue1Q&usqp=CAU" height="100%" width="100%" />

                                            <div className="text-div">
                                                <text className="card-text">something here</text>
                                                <div className="btn2-div m-0 mt-1">
                                                    <button className="btn2">ler mais</button>
                                                </div>
                                            </div>
                                        </label>
                                        <label htmlFor="s2" id="slide2">
                                            <img className="fea" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwGPF8X5lgcLBtUZUXV9kPPpfw7IuIsTq3uQ&usqp=CAU" height="100%" width="100%" />
                                            <div className="text-div">
                                                <text className="card-text">something here</text>
                                                <div className="btn2-div m-0 mt-1">
                                                    <button className="btn2">ler mais</button>
                                                </div>
                                            </div>
                                        </label>
                                        <label htmlFor="s3" id="slide3">
                                            <img className="fea" src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" height="100%" width="100%" />
                                            <div className="text-div">
                                                <text className="card-text">something here</text>
                                                <div className="btn2-div m-0 mt-1">
                                                    <button className="btn2">ler mais</button>
                                                </div>
                                            </div>
                                        </label>
                                    </section>
                                </div>
                                <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
                                    <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
                                        {/* <button className="h-10 pr-0" id="nex-btn">{'>'}</button> */}
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    {/* ---------------------after carosuel button---------------------- */}
                    <div className="btn1-div">
                        <button className="btn1">Conheca nossos herois</button>
                    </div >
                    {/* --------------------some text and year-------------------------------- */}
                    <div className="break-dgn mb-2 mt-2"></div>
                    <div className="row" >

                        <div className="textcap">
                            <small className="medium_text">Conheca nossa historia</small>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-10 m-auto">
                            <div className="row">
                                <div className="larger_text col-10 col-md-12 col-sm-10">
                                    Nosso lar<br />
                                     no Brasil
                                </div>
                                <div className="col-2"></div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-10 col-sm-10">
                                    <small style={{ color: '#282c34' }} className="smaller_text">
                                        This defines the alignment along the main axis. It helps distribute
                                        extra free space leftover when either all the flex items on a line are
                                        This defines the alignment along the main axis. It helps distribute
                                        extra free space leftover
                            </small>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-10 m-auto">
                            {/* ------------------year-------------- */}
                            <div class="continput">
                                <h1>Jelly Radio btn</h1>
                                <h4>I hope you enjoyed it</h4>
                                <ul>
                                    <li>
                                        <input checked type="radio" name="1" />
                                        <label>OMG a radio!</label>
                                        <div class="bullet">
                                            <div class="line zero"></div>
                                            <div class="line one"></div>
                                            <div class="line two"></div>
                                            <div class="line three"></div>
                                            <div class="line four"></div>
                                            <div class="line five"></div>
                                            <div class="line six"></div>
                                            <div class="line seven"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <input type="radio" name="1" />
                                        <label>Uuuuh radio</label>
                                        <div class="bullet">
                                            <div class="line zero"></div>
                                            <div class="line one"></div>
                                            <div class="line two"></div>
                                            <div class="line three"></div>
                                            <div class="line four"></div>
                                            <div class="line five"></div>
                                            <div class="line six"></div>
                                            <div class="line seven"></div>
                                        </div>
                                    </li>
                                    <li>
                                        <input type="radio" name="1" />
                                        <label>radio everywhere</label>
                                        <div class="bullet">
                                            <div class="line zero"></div>
                                            <div class="line one"></div>
                                            <div class="line two"></div>
                                            <div class="line three"></div>
                                            <div class="line four"></div>
                                            <div class="line five"></div>
                                            <div class="line six"></div>
                                            <div class="line seven"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* ---------------------x--------------- */}
                        </div>


                    </div >
                    {/* ------------------------------------------------------- */}
                    < div className="row" >


                        <div className="col-lg-8 col-md-12 col-sm-10 m-auto">

                            <img src={BckImg} style={{ width: '100%', paddingTop: '20px', paddingBottom: '20px' }} />


                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-10 m-auto">
                            <small className="text1">Conheca nossa historia This defines the alignment along the main axis. It helps distribute </small>
                            <small className="text2">alignment along the main axis. It helps distribute</small>
                            <div className="button_end_style">
                                <button className="button_end">Doe</button>
                            </div>
                        </div>

                    </div >

                </div >

            </div >

        </div >

    )
}

export default Front

const froNt = {

}
