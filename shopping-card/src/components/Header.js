import react from 'react';

export default function Header(props){
    const {countCardItems} = props;
    return(
        <header className='row block center'>
            <div>
              <a href='#/'>
                <small>Small Shopping Card</small>
              </a>
            </div>
            <div>
            <a href='#/cart'>

                Card {' '}
                {countCardItems ? (
                    <button className='badge'>{countCardItems}</button>
                ):(
                    ''
                )}

                </a> <a href='#/SignIn'>SignIn</a>
            </div>
        </header>
    );
}