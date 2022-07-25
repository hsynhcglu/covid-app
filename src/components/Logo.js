import PropTypes from 'prop-types';

const Logo = ({logo,title}) => {
    return (
        <div className='flex items-center'>
            <img src={logo} alt={title} className='mr-3 h-6' />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
                {title}
            </span>
        </div>
    );
}
Logo.propTypes={
    title:PropTypes.string,
    logo:PropTypes.string
}
Logo.defaultProps={
    title: 'Corona App',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/597px-SARS-CoV-2_without_background.png'
}

export default Logo;