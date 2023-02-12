import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    logo:string,    // wsp.png
    phone:string,   // 261614
    message:string  // Esta comunicandote con ... , por favor ingresa tu duda.
    width:number    // 80px
    height:number   // 80px
}

const WhatsappButton = ({logo,phone,message,width, height}:Props) =>{
    const formattedMessage= message.replace(/  /g,"%20")
    console.log("Mi mensaje formateado es: ",formattedMessage,logo);
    return (
        <>
        <div className='fixed bottom-2 right-2 flex flexColumn'>
            <a href={`https://wa.me/${phone}?text=I'm%20interested%20in%20your%20car%20for%20sale`}
                target="_blank"
                rel='noreferrer noopener'>
                    <img src={logo} width={width} height={height} alt='Logo de WhatsApp'></img>
            </a>            
        </div>
        </>
        )
}

WhatsappButton.propTypes = {
    logo:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
    message:PropTypes.string,
    width:PropTypes.number,
    height:PropTypes.number
}

WhatsappButton.defaultProps = {
    logo:"mi-logo.png",
    phone:'125619814',
    message:"Estas comunicandote con ...",
    width:60,
    height:60
}

WhatsappButton.schema = {
    title:"Boton de Whatsapp",
    type:"object",
    properties:{
        logo:{
            title:"Logo de Whatsapp que se relacione con la marca",
            type:"string",
            widget:{
                "ui:widget":"image-uploader"
            }
        },
        phone:{
            title:"Telefono",
            description:"Agrega por favor el numero de telefono",
            type:"string"
        },
        message:{
            title:"Mensaje",
            description:"Agrega por favor el mensaje que se vera para tu cliente",
            type:"string",
            widget:{
                "ui:widget":"textarea"
            }
        }
    }
}

export default WhatsappButton;