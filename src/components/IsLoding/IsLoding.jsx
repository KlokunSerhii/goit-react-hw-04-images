import { Dna } from 'react-loader-spinner';
import { Spiner } from './IsLodind.styled';

export const IsLoder =()=>{
    return(<Spiner>
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </Spiner>)
}

export default IsLoder;