import React from 'react';
import ImgAndTitle from '../componants/edits/ImgAndTitle';
import SaveButton from '../componants/edits/Btn';
import Article from "../componants/edits/Articl/index";

function GalleryDash(props) {
    return (
        <div className="bg-white shadow-custom drop-shadow-lg h-full w-full rounded-[14px] sm:p-8 p-4">
            <div className="flex flex-col sm:flex-row justify-between gap-8">
                <div>
                    <div> <ImgAndTitle img={require('../../media/images/home/Home1.png')} /></div>
                    <Article
                        text="Industry my-5 experts in Testing, Certification, Lifting Equipment & Training Services"
                    />
                </div>
                <div>


                    <div> <ImgAndTitle img={require('../../media/images/home/Home1.png')} /></div>
                    <Article
                        text="Industry my-5 experts in Testing, Certification, Lifting Equipment & Training Services"
                    />
                </div>
            </div>


            <div className='my-14'>
                <div> <ImgAndTitle img={require('../../media/images/home/Home1.png')} /></div>
                <Article
                    text="Industry experts in Testing, Certification, Lifting Equipment & Training Services"
                />
            </div>


            <div className="flex flex-col sm:flex-row justify-between gap-8">
                <div>
                    <div> <ImgAndTitle img={require('../../media/images/home/Home1.png')} /></div>
                    <Article
                        text="Industry my-5 experts in Testing, Certification, Lifting Equipment & Training Services"
                    />
                </div>
                <div>
                    <div> <ImgAndTitle img={require('../../media/images/home/Home1.png')} /></div>
                    <Article
                        text="Industry my-5 experts in Testing, Certification, Lifting Equipment & Training Services"
                    />
                </div>
            </div>


            <div className="text-center w-full">
                <SaveButton />
            </div>
        </div>
    );
}

export default GalleryDash;