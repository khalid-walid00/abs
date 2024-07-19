import React from 'react';

function Maps(props) {
    return (
        <div className='w-full'>
           <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.275437048005!2d54.357526065082595!3d24.47591162600584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e670e0bab5637%3A0x4aa3df304890081b!2sArabian%20Bureau%20Of%20Services!5e0!3m2!1sar!2seg!4v1712766505409!5m2!1sar!2seg"
                    className="w-full p-0 lg:h-[450px] md:[350px] h-[250px] border-4 border-secoundColor"  frameborder="0" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>  
        </div>
    );
}

export default Maps;