import styles from '../styles/Word.module.css';
import useFetch from '../hooks/useFetch';
import { Definition, Meanings, Phonetics } from '../types/FetchTypes';

const Word = () => {
  const { data, word } = useFetch();

  return (
    <div className={styles.content}>
      <h1 className={styles.word}>
        {word}
        <br />
      </h1>
      <strong>
        {data
          ? data.phonetics.map((phtc: Phonetics, index: number) => {
              return (
                <div key={index}>
                  <span>{phtc.text}</span>
                  <br />
                </div>
              );
            })
          : null}
      </strong>
      <br />

      {data
        ? data.meanings.map((meaning: Meanings, index: number) => {
            return (
              <div key={index}>
                <h3>{meaning.partOfSpeech}</h3>
                {meaning.definitions.map((defn: Definition, idx: number) => {
                  return (
                    <div key={idx}>
                      <strong>{idx + 1}:</strong> {defn.definition}
                    </div>
                  );
                })}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Word;
