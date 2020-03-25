import React from 'react';
import Img from 'gatsby-image'

const Image = ({ image, title, className }) => <Img className={className} fluid={image.childImageSharp.fluid} alt={title} />;

export default Image;