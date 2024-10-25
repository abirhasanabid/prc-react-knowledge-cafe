import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="container mx-auto flex justify-between items-center border-b-2 mt-12 pb-8">
            <h1 className="text-3xl md:text-6xl font-bold">Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;