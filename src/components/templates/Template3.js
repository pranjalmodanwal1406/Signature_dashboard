import React from 'react';
import {
  FaPhone, FaMobileAlt, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaVideo, FaSkype, FaFax, 
  FaTelegram, FaWhatsapp, FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, 
  FaApple, FaAndroid, FaAmazon, FaBehance, FaRegHandshake 
} from 'react-icons/fa';

const Template3 = ({ data, onSubmit }) => {

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
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={data.image} alt="Profile" style={{ borderRadius: '50%', width: '80px', height: '80px', marginRight: '20px' }} />
        <div>
          <h2 style={{ margin: 0 }}>{data.name}</h2>
          <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>{data.title}, {data.company}</p>
        </div>
      </div>
      <hr style={{ margin: '20px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ flex: '1', marginRight: '10px' }}>
          <p><FaPhone color={data.color || '#007bff'} /> {data.phone}</p>
          {/* <p><FaMobileAlt color={data.color || '#007bff'} /> {data.mobile}</p> */}
          <p><FaGlobe color={data.color || '#007bff'} /> 
            <a href={`http://${data.website}`} style={{ color: data.color || '#007bff' }}>
              {data.website}
            </a>
          </p>
          <p><FaEnvelope color={data.color || '#007bff'} /> {data.email}</p>
          <p><FaMapMarkerAlt color={data.color || '#007bff'} /> {data.address}</p>
        </div>
        <div style={{ flex: '1', marginLeft: '10px' }}>
          <p><FaVideo color={data.color || '#007bff'} /> Hangout {data.hangout}</p>
          <p><FaSkype color={data.color || '#007bff'} /> Skype {data.skype}</p>
          <p><FaTelegram color={data.color || '#007bff'} /> Telegram {data.telegram}</p>
          <p><FaWhatsapp color={data.color || '#007bff'} /> Whatsapp {data.whatsapp}</p>
          <p><FaFax color={data.color || '#007bff'} /> Fax {data.fax}</p>
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
          backgroundColor: data.color || '#007bff', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = data.color || '#007bff'}
      >
        OK, I'm done
      </button>
    </div>
  );
};

export default Template3;
