import React from 'react';
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonial = () => {

        const clients =[
            {
                img: profilePic1,
                review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit error nisi sunt delectus quae ullam, et modi voluptas earum architecto deleniti iste voluptatibus eveniet iure eaque at cumque totam.",
            },
            {
                img: profilePic2,
                review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit error nisi sunt delectus quae ullam, et modi voluptas earum architecto deleniti iste voluptatibus eveniet iure eaque at cumque totam.",
            },
            {
                img: profilePic3,
                review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit error nisi sunt delectus quae ullam, et modi voluptas earum architecto deleniti iste voluptatibus eveniet iure eaque at cumque totam.",
            },
            {
                img: profilePic4,
                review:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit error nisi sunt delectus quae ullam, et modi voluptas earum architecto deleniti iste voluptatibus eveniet iure eaque at cumque totam.",
            }
        ]

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Client</span>
                <span>Work</span>
                <span>from me ...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            {/* slider */}
                <Swiper
                
                modules={[Pagination]}
                slidePerView={1}
                pagination={{clickable: true}}
                
                >

                    {clients.map((client, index)=>{
                        return(
                            <SwiperSlide key={index}>
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>

        </div>
    );
};

export default Testimonial;