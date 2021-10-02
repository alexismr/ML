
import SearchBox from '../../../components/SearchBox/SearchBox';
import   './Header.scss';

const Header: React.FC = () => (
    <header className="Header" data-testid="Header">
        <div className="Header__container">
            <a  href="/" className="logo">
                <img src="../../assets/img/ML_Logo.png" alt="logo" title="logo" />
            </a>
            <div className="Header__container__boxsearch">
                <SearchBox />
            </div>
    
        </div>
    </header>
);

export default Header;
