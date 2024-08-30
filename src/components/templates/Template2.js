import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaVideo, FaSkype, FaFax, 
  FaTelegram, FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, 
  FaApple, FaAndroid, FaAmazon, FaBehance, FaRegHandshake 
} from 'react-icons/fa';

const Template2 = ({ data, onSubmit }) => {

  const getFontSize = () => {
    switch (data.size) {
      case 'small': return '12px';
      case 'medium': return '16px';
      case 'large': return '20px';
      default: return '16px';
    }
  };

  const getSpacing = () => {
    return data.spacing === 'wide' ? '1.5em' : '1em';
  };

  return (
    <div style={{ 
      fontFamily: data.font || 'Arial, sans-serif', 
      color: data.color || '#333', 
      fontSize: getFontSize(), 
      lineHeight: getSpacing(),
      maxWidth: '700px', 
      margin: '20px auto', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '10px', 
      backgroundColor: '#f9f9f9' 
    }}>
      <h2 style={{ marginBottom: '5px' }}>{data.name}</h2>
      <p style={{ margin: '0 0 10px' }}>{data.title}</p>
      <p style={{ margin: '0 0 20px' }}>{data.company}</p>
      <hr style={{ margin: '20px 0' }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 45%', marginBottom: '15px' }}>
          <p><FaPhone /> Phone: {data.phone}</p>
          <p><FaGlobe /> 
            <a href={`http://${data.website}`} style={{ color: data.color || '#007bff' }}>
              {data.website}
            </a>
          </p>
          <p><FaEnvelope /> Email: {data.email}</p>
          <p><FaMapMarkerAlt /> Address: {data.address}</p>
          <p><FaVideo /> Hangout {data.hangout}</p>
          <p><FaVideo /> Zoom {data.zoom}</p>
        </div>
        <div style={{ flex: '1 1 45%', marginBottom: '15px' }}>
          <p><FaSkype /> Skype {data.skype}</p>
          <p><FaTelegram /> Telegram {data.telegram}</p>
          <p><FaFax /> Fax {data.fax}</p>
          <p><FaPhone /> Extension {data.extension}</p>
          <p><FaRegHandshake /> Mee {data.meet}</p>
          <p><FaWhatsapp /> Whatsapp {data.whatsapp}</p>
        </div>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        <FaInstagram size={30} color="#E4405F" />
        <FaLinkedin size={30} color="#0077B5" />
        <FaYoutube size={30} color="#FF0000" />
        <FaTwitter size={30} color="#1DA1F2" />
        <FaApple size={30} color="#A3AAAE" />
        <FaAndroid size={30} color="#3DDC84" />
        <FaAmazon size={30} color="#FF9900" />
        <FaBehance size={30} color="#1769FF" />
        <FaGithub size={30} color="#000000" />
      </div>

      <button 
        onClick={() => onSubmit(data)} 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px' 
        }}
      >
        OK, I'm done
      </button>
    </div>
  );
};

export default Template2;
