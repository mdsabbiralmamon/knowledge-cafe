import profileIcon from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center my-4 border-b-[#11111126] border-b-2 pb-2'>
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img src={profileIcon} alt="profile icon" />
        </div>
    );
};

export default Header;