type GlossaryCardProps = {
  termin: string;
  definition: string;
};

function GlossaryCard({ termin, definition }: GlossaryCardProps) {
  return(
    <div className='glossary-card'>
      <h2 className='glossary-card__termin'>
        <dfn>
          {termin}
        </dfn>
      </h2>
      <p className='glossary-card__definition'>
        {definition}
      </p>
    </div>
  );
}

export default GlossaryCard;