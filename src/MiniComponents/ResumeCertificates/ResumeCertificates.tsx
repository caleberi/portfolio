import React from 'react'
import './ResumeCertificates.css'

type CertificateProps = {
    images: string;
    title: string;
    membershipId: number;
    date: string; // this should be a Date object
}

const ResumeCertificates = ({ images, title, membershipId, date }: CertificateProps) => {
  return (
    <div>
        {title} 
        {membershipId}       
        {date}
        <img src={images} alt="img" />
    </div>
  )
}

export default ResumeCertificates