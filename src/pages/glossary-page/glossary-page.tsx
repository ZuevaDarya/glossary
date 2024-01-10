import Header from '../../components/header/header';
import GlossaryCard from '../../components/glossary-card/glossary-card';
import glossary from'../../app-data/glossary.json';
import './glossary-page.css';

function GlossaryPage() {
  return(
    <div>
      <Header />
      
      <div className='glossary-card-container'>
        {
          glossary.map(({termin, definition}, idx) => (
            <GlossaryCard 
              termin={termin}
              definition={definition}
              key={`${termin}-${idx}`}
            />
          ))
        }
      </div>
    </div>
  );
}

export default GlossaryPage;