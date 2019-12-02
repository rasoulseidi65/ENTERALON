import BaseLayout  from '../src/layouts/BaseLayout';
import SearchBox  from '../src/layouts/SearchBox/SearchBox';
import CountriesProperties  from '../src/layouts/CountriesProperties/Properties';
import LatestProperties from '../src/layouts/LatestProperties/LatestProperties';
import BespokeVr from '../src/layouts/BespokeVR/BespokeVR';
import SuggestedPrpperties from '../src/layouts/SuggestedProperties/SuggestedProperties';
import LatestNews from '../src/layouts/LatestNews/LatestNews';
import Awards from '../src/layouts/Awards/awards';

import Link from 'next/link'
function Home() {
  return( 
    <BaseLayout>
    <div>
    <div className="">
        <SearchBox/>
        <CountriesProperties/>
        <LatestProperties/>
        <BespokeVr/>
        <SuggestedPrpperties/>
        <LatestNews/>
    
    <Awards/>
   
    </div>

  </div>>

    </BaseLayout>
    
    )
}

export default Home