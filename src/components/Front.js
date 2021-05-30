import React from 'react'
import BckImg from "./images/kids_background.jpg"
import "./Style/front.css"

function Front() {
    return (

        <div className="container">
            <div className="row m-auto">
                <div className="col-lg-12 col-md-12 col-sm-10 ml-0">
                    <div class="row">
                        <div className="col-6">
                            <div className="row">
                                <h1>First row</h1>
                            </div>
                            <div className="row">
                                <h1>Second row</h1>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="card text-white">
                                <img src={BckImg} className="card-img" style={{ height: '80vh' }} />
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* #################################################### */}



            <div className="row m-auto">
                <div className="col-lg-10 col-md-12 col-sm-10 m-auto">
                    {/* <div class="row"> */}
                    <hr className="break" style={{ height: '7px' }} />
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
            <div className="row m-0">
                <div className="col-lg-11 col-md-12 col-sm-12 m-auto">
                    <div className="card-body text-center">
                        <iframe width="90%" height="480vh" src="https://www.youtube.com/embed/3CRSF69PJD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                </div>
            </div>

            {/* ------------image with details------------- */}
            <div className="row m-auto">
                <div className="col-lg-10 col-md-12 col-sm-10 m-auto">
                    <hr className="break" style={{ height: '7px' }} />
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

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
                                <div className="carousel-caption  d-md-block">
                                    <small className="smaller_text">This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are</small >
                                    <div style={{ paddingTop: '5px' }}>
                                        <button className="button_ca">ler mais</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGBgZGhgYGhoaGBoYGhoYGRgZGhkYGBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJCs0NDQ2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALEBHQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EADcQAAEDAgMEBwcEAwEBAAAAAAEAAhEDIQQxQRJRYXEFIoGRodHwExQyUpKxwQZi4fEVQlPScv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACwRAAICAQMEAgEDBAMAAAAAAAABAhEDEiExBBNBUSJhFAWRoTJScbEVI0L/2gAMAwEAAhEDEQA/APk7HkKTddDE4RwzZxtosREZhaRaZrLHKLpjKMQWnXLmoZSkwhhByV2knKx+6Y1ToYykW3JieI+yl1PkfBVBn4s+OfeqvaQbFTTNdktlsDsODoezRZn0SOS3Uq0WcVocA4WcORgdx1RbXIu3GStHJa46qWs1WmtRM6dhCU0kWKswcXF7jHw6DHBMp4abyAN5Sp5KWAzIlDXo0TV7oa8SCBp4rC9q6LGA5G/JIfQ370kE4t7mWmbgrY+iYDtCkBkFb6dduyWOyN2ncdRyICb2FjinakZDVgRqqHepqNl3enMp9XthMVNuhuHEgjh9rpFSlErTRYZAGYV6jbmRmM+EKeGbuGqJjeAWi94hKYmPbuShmqRg+RxbISH5LRQ3KjmICStWZoUtKlzVaiLpoyrcs9iWm1ClwmN8lXhVIsmOCoQgllWNlONhxVqdM6epQ9kZoCnyJ2ZXRwrdmDlDT3mViYbi0J768tPOB5+t6lo0xtRdisRUtzJKzhspr22VC+ECbt2x9LE//XerVXg/CRxCyFpCsUqK7kqpgQdO5Wa7fPYfV0MfG9PaDpPggUVfBQGTme1MLDrMqvs0xr5sUGiXsKbNCh9CMrp4Yr1WWSs10bGUPjMFLiTmtIw8iRnulVbRIKdohwkJLCteEws5plslJdIAGYRdlxgk7YjEU4mNLJLHRc33z9wukzDyJ8FerhWhs6apX4L7TfyRzHtmIBSnMK1NaWktMx6utFPDg+rp2Z6GxGEw03Pj+EVeo4gQW6RxWvEv2LN1Ejgk4dm3DctB36+KF7KcUviuS+Ad1w6MuJATcUQSdmYmZ1J3clbF0dgtYPiHWd3WH3U0qUtzUOuTojFpPGc19O8jJKqMvOi14lkGAmUWAsdO+fAKr2Od47k0c9lrpjBmrGiRpZMowqZCi06ZhqtVaITsQEptgmjCaqRR5V2NtKXEpz8oTJW+4oqoCsQiEyRzK2zlnP8ASS90qitCQ7b2GtbAJPD8lUpNJ9ZBXdkeyO7NSynnpYd5QUo7g9s5fwqupN3qzWyLaLPUF1DLapXRZpBzQ1sZ5KjXJrSmSnZaoyDmDxCdQeBPFKdUJzv91QEoLtJ2jTYqfZpTXLbMtGUxeJ8Qk9jWNS5IL7QqG6q8qKTusPylQ3LemOpMvErVTpzbsCzuN7eu1DahzufW5SbQaTovXZBTKDbHRWcdrPNXbSIhKzRQ+VrgWx5aR6Kq55JI0OSaWg2hTVplsW7B6sqsHF19FsNhdpwDrcSlVz1zaAIHZknsrSImCr1Ke11t4AKm3e5pojKNRMNSnrE8VTDvjn5Lc2j1SLpDcMJmfyqTMpYmmmjVtbbQ8i4seSpQpEEgH1uTMNUDCfsZvvhanNnZLcjmdfFS3Wx0RimrfPk5tTDEyddyUxuy6H2BWikNp0HMTP8ACdicM0kcu1O62Zjo1fKJzsSCLC4GXJKc3KE/EsLbbsuSja6sd38KlwYyjcnZnq0ZWSqxb3TEHJZnMvG9UjnyRRFLDHYL9xhKcF38Rhtils/NB8FxHNRGWovNh7VJ80KDNyoWLbh2XMgwB/SzVDeVV7nM47WZyFYNV2slMdCZCRVomTyTqTNqeJvyCgU56rc/AJ9KWsjODpBsolwb44778CGVNm28Ge63csVXNNe8pClLyTkn4RMK7UNfwV7HKy0IRCArbBzQ22iB0WDMitFOkY/Pkq0HgWcJB8NxCY9kQM84P54JM2gklZWq0gXCSuuwNAG2C5pAAu3OL9maw1cLbaZlzB7LclKZc8flFGOyWu0W9FYQ/SEymb28k3EITrY2GrujjPkujhX7QEi4y/sLlUXda9wtzSBkBOhG71vWconbhnvbYpzyx9xacluZsuIG0AIi+fIDVYcW+4Ov3VsNsky4kEaIa2HGdSa8WajhQDInfY7lVlcNgd40g9is/FAWBz++47lUYfbEgiRmLb7mNVPjc2bV/wDXyPxDBBdOYEW1WbAQSY+IafcrXSZsjZsQQdAI4G8arDQGy8jI9yIu00GS006/yPq4UuLjFxr+EYdhbZ3wkgZgjxAWzDMqEmfhIMfdPexpbtG32nhGShy8GkcSfyWzODiGw8GYz9eK2UsUS6NkOmxMRA8lTpHDnMDL1mtWApPDCNppyyLT9iVo2nGzmhFrK4rbyczGM0HoLO+p1Y3Lo4ylHA68iubs804vYyzQakwgkC8+CRk5vAhdLDt/aO1Z6jOsTG5WnZlLG1TOx0z8AjcPsvPQu7jXl9Np5flYAyBkssWyOnrVrmmvSMmLeG9Rp1vzWEhPrsMqtNi6I7I8uduVAynZVcxPcICqXQpciu2qFUmEEE2BMKcTVnLkqPfPNUIQlfInLStKEuVS1Nc1UTZg0GypATIRCZekqCU3bnNV2VOygFaL20Tmu0y/PYs4amAlOi0xjgQLGw0U0sURbSe5UVdhFWPU07RqrxmBnrkeazVGa5qwUtQo0DlZFFxC1NxQ7fys5CqGFDimOMpR4N7XbQkdyq52+345LK0kJ9N5m90tNGiyWJqOIMSt+AxhabZ3y9ZrNXZJS29U2II4T+QhxUkKOSUJWmelw+JY8hsgOOUTE7oO9JxWAghxPVO65jgFhwZBEQJ0Pkus/FBrNg3zkk3jgR3LCUXGWx6kc8ckPkZamIa1o2STE9Uk98q1F7Hi7iCZsJ3G4hcvEEE2SGPLTIJC07aaOZ9W1LdbHUrYgjqPJ78tL8IW3A4ZrmSx/W4W3Lg1qjndZxJJzJzWjo/EPBhsj1qlKHx2FDqE8ltWju1MLLZdncTbMZgrF/jTsywbV9/krux2w0iZJ32HmfBIw3TGwbcsrd0idfNYKEuUdks+JtJmJ8ixBBCGmRG7Vegq0m1ADsQ46iYjtXMfhC3lv0vxCtSTVcMl4ZJ6k7RDX7TA2NfBQ9jTLZyFtxWh9HYYSTEWB/1M8ZWGmwzwA2ieHohKNU6DInaTXJgriVncYK0vMmdJy1WSsVpq2PPnCnZBeozU06ZJTH0ozU6tx6JNWI2VVyc5ij2cK9Rk4GchV2E5yqk5NkaUO9kj2a6LaKt7unqNe0c0UlPsl0hhke7J60HZZzgxWFNb/d1YYdPWHaZgFNW9ktwoJgoI1AsTOcKSkUV0hh1PuyNY+yzm+xU+yXTGGVK1MNBccgjWDxNI53s0tz2tN3AHmsOJ6WcbNEDfmew6aLnc/Xkk5nPKS8Hcd0gwTJJPAZ9qw1OkifhaAONysJQBKzc2S3KRqZ0nUbdpA7B+VZvSdWSdqZEXAI7jrxWZlOVYU1Dmy0pey4x1T5u8DyVv8i+ZtyhK9kqbF4nfdNTZLizfR6S0eO0eS3YbHtNgY52XAMKZ9Z+CpTYlKUWemY7buDteKv7A7l5nD13sIcwwdDHgZtqvQdFdKe0dsvADt8xO6xVa2b45xk6lydTBYtzLZjcd26d67NJ7HnaEbQFzkbb/ALrluwyGAjf65LKSUt0enizSx7PdD+mPgERbOxE7rb1zqg2aY/cJJIP4H9ruUXCNtxkyTFp9ZJOPYwiRBi45m8d5WKco7V5Ox6J27V0eXfszYgc8+1ILSStmOgWhIZRfnEDfl/a1Ujzp4/lX+h9IbAmLpQpOcZTKYMyT6+/gmkk2vHAR4lJPctxuKXgzvpBuqzVHhaX0zy8UsUb3t23WiZzzi3skZQDuRslazASS/gnZi4Ud9tNXFJaNlTsrLUdyghApKfZJwarhqNRagjOKSu2jwTw1XAS1DUEZ/YqzaK0tamMYpcylBGdtFMGHWlrE9rVLmWoIwjDLifqp2zRjq9Yxcwcr7I1PmvVEwvK9Pfp99auHtMtLYMkAN2cgLTB5HNOMt9zm6mLUGoq2zx+Hwxde0cTF+e+yZRYzUuDp5ZSYJmxy3ZFauk8D7J4puc0/CS1pLiAZsLC+val1nNIDAwNdIlxcbCLB2QGWtxs929njaWnTA4VjgAw9Yi4uTaSdLADfw5qHYIzAEkSS0dYgDMyNFamS34JB/wBoc0tIbcFrpN87SbHNdDD4oH4g5pEbAAEEQ6DcHhbmokzaEbMWHwpMQRfwJyHct2H6P3tJMGwtkBe+k9326PR+GL9Gw1rczNtk2zGecZz49xnR7/jYNjasAJECBHP4Z5lc0stHp4+mi1bPGP6PNyAdkXJ2dNYE3A81kfhSSRmYJO4EaSLaL2uK6LIGwQ0EyQ42jZEQDlmAZ4Ea24VYhjusIEva7YJGrZGZjRXDJZlmwUrRx24DqzaIkkG+UxB/E6JVZrLAbjJ62+06kxeFuxOKcZaxpaJOySYcQCT14sdLZTvXPewRtAi1+sQHOP8AtA3LdM8+UaKtpNcSB1RBPWNgb9WQLm40UYZxp1GmQC065RkZibZpteq1zSQxrMo2Ztv2gT4xokMY55a1rS5xMDiTkBuVGfnY+i0GbYBtGc/ynCnFgEnoHAGjRa1xJPxEWs43IEaLqGmLGFg57ntxTcU2qZlo9HvdeICd/j2jN0nmAuoKrS2BGWtrrlVqD3T1h2GR2rKeWR1YMGN7tnPxODpzMSRkFz8SJMQLabuZ/C6xwQbm6eMEfiFndhWDJze4z4LOMnZ3SUHGlRxXUyTb+ezcmNovyA7V1BTYLZ8gf7TWPj4WHuAWus5Hj32TOSOjnu3+uKYOhjqO9dhtcjTxS34l5y8AUd30S+mvdo5NTooDOO7zWV2EbuHgunXFQ/6nwXOqUHk7u1aRn9nLlwNcI64cpleE96qf9H/W7zUjF1P+j/rPmt+19nAut+j3YhWBXgxi3/8AR/1O81b3p/zv+t3ml2/sv836PdgqweF4MYp/zv8Ard5qRiX/ADv+t3mjtD/N+j37CnsXzwYh/wA7/rd5qwxD/nf9bvNLsP2Uut+j6QxqcGBfNRXf87/qPmrtqv8And9R80n0z9lLrE/H8n0F6GNXhGPf8zu8+a0sL/mPeUuw/ZrHOpeD1GM6EpVCS5jdoiC4CHZRmM7b1iH6bpANbsu6uR2iZMRJGRPrKy5jWP8AmPemtpu3+KFCS8hohJ20b3/ppgpvawvbtCSAA6S24EHPIDMTfhHIf+nKzGF52SwS4j4SBAvs5DlP+q3sDt571ppk6lTKL9lx6aN2tg6F6LrAy0EECciDBGWVtc4FivpP6XdSDIcGhwEdYCwGdoXi8LUO8rL+pulHsbT2XEElwnWLLklFxkmi8+LVCr2O50/gzUqEUQWjrDaghuzNxIF9LLxVfoGs98NaTeCXAsDYgTLoBi/wz8NpsvYVa5iATAEDkFzaz37z3nzRjjLk0WD4KLZyKH6KJM1avyyGNBNhbrOFgN0aDs6I/R+HgjZMER8V4mY2s8+KW+q/53fUfNZamJrfO/6nf+l06ZvyYvpYR8WdSn+ksPLTsDqggXJEHfe54rczomnT+BjG62AGeeS8q7E1v+j/AK3f+kh+Lr/9H/W7zR2ZvyJaIO1H+D2fsQodTC8JUxtb/o/63eazux1b/o/63+aa6eXsmXUQXhnv3uDbysr8WPmjsC8G/GVTnUf9bvNKdianzv8Ard5pS6SUuWEOvxw/8s9y7Ez/ALHu8gkHEfu8P5XiTianzv8Aqd5qhxD/AJ3/AFHzS/DkvJT/AFWH9rPctxQ+Zx7R+ApdigPUnxXhTin/ADv+p3mqHFVPnd9TvNH4r9h/ysa/pf7nvPfkt+P9SvCnEv8Anf8AUfNUOIf87vqKa6T7Il+qx/tf7ns62M4jvWN2KHzeC8v7d/zO+o+ar7R3zO7yrXT15MZfqSfgqFMKFIXWeSiQFZVBUhyVDsuFYBLBVgUykxjVdqUHepVw/imUmaGlXZPoFZw/l4JjXIKUjWx/b23Wui/1M/lc9lQ8fBOY/meTWpNG0MlHTY/1AT2v59xXOZWA1AH/AMO7paQE1lad08HEHsErNxOmOV2dAVFZlWDmufUxTGi7ha157sly6/TbQYaJ46LKS9G/5EY8s9pQrrhfrKv1Kd7hztP2/wABcF/T9T/WB4rHice98BztqL9qzUHdsjL1kJQcY3Z9OZidoTI71V7vVl89o9O1miA4HmN3anU/1LVB60EbhLfFJQaNl12Jrez2VUrFUqLk0v1Gx1nDZ4mT9k/31jh1XDvgd+0FrFeyZdRCX9LNLn+rpFR/PtCQ+tH9eZSn1OA7gPwtlE5pZmTVqcvXasz3H1J/Cl7z6ySHv9StEjmlOwcfWSU8qC/klufx7kGTkSVUqC5UJQQ2SVUhBKjaSJsiFBCklVKAIUFShBBEqVUKQgCVYFVVTWASboBoUwsrq53KheTqp1Idm0vAzKj3hu/wWFCNTHZu96bxR7435SsKEamLUzeOkP2nvTWdKftP1fwuWgJamNSaOqelz8veR+AFnr9IvdbIbhksiEm2y9Un5Jc8nMkolQhImywcjaVVCVD1DNtVLlCECthKljiLgwoQmBqp9IPaIBHaAr/5R+4ePmsSqU7YOUvZvPSJ+Ud5VPfv2rGhO2LUzZ77+1R72Nx8FkQjUxWzZ7yDvUio06rEhPUws3SFBWNryMimNrHVCkgseoVG1AVZWnYglRKCoQBQ1FBqpaFnqYEucTmoQhSAIQhAAhCEACEIQAIQhAEypVUIHZZChSgoEShQlQEoUKJTE2WUKEIFZJKhCECBCEIAEIQgAQhCABCEIAFIcVCEAXFRT7RLQnqYAhCEgBCEIAEIQgAQhCABCEIAEIQgAQhCAJClCEFIFCEIGBUIQglghCECBCEIAEIQgAQhCABCEIAEIQgAQhCABCEIA//Z" className="d-block w-100" alt="..." />
                                <div className="carousel-caption  d-md-block">
                                    <small className="smaller_text">This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are</small >
                                    <div style={{ paddingTop: '5px' }}>
                                        <button className="button_ca">ler mais</button>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
                                <div className="carousel-caption  d-md-block">
                                    <small className="smaller_text">This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are</small >
                                    <div style={{ paddingTop: '5px' }}>
                                        <button className="button_ca">ler mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* ------------------------------------------- */}
                    <div style={{ paddingTop: '30px', paddingBottom: '30px', textAlign: 'center' }}>
                        <button className="btn1">Conheca nossos herois</button>
                    </div>
                    {/* --------------------some text and year-------------------------------- */}
                    <div className="row">
                        <hr className="break" style={{ height: '7px' }} />
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
                            <section className="timeline">
                                <ul>
                                    <li>
                                        <div>
                                            <time>1934</time>
                                            Some content here
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <time>1934</time>
                                            Some content here
                                        </div>
                                    </li>

                                    <li>
                                        <div>
                                            <time>1934</time>
                                            Some content here
                                        </div>
                                    </li>

                                    {/* <!-- more list items here --> */}
                                </ul>
                            </section>
                        </div>

                    </div>
                    {/* ------------------------------------------------------- */}
                    <div className="row">


                        <div className="col-lg-8 col-md-12 col-sm-10 m-auto">

                            <img src={BckImg} style={{ width: '100%', paddingTop: '20px', paddingBottom: '20px' }} />


                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-10 m-auto">
                            <small className="text1">Conheca nossa historia This defines the alignment along the main axis. It helps distribute </small>
                            <small className="text2">alignment along the main axis. It helps distribute</small>
                            <div style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '20px' }}>
                                <button className="button_end">Doe</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div >

    )
}

export default Front

const froNt = {

}
