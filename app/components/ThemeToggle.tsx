import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/app/redux/themeReducer';
import { RootState } from '@/app/redux/store';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state: RootState) => state.theme.darkMode);

    return (
        <button onClick={() => dispatch(toggleTheme())}>
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeToggle;
