import * as z from 'zod';
import { MagnifyingGlass } from 'phosphor-react';
import { SearchFormContainer } from './SearchFormStyles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

function SearchForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('q') ? searchParams.get('q') : undefined;

  async function handleSearchTransactions(data: SearchFormInputs) {
    if (data.query) {
      searchParams.delete('page');
      setSearchParams((params) => {
        params.set('q', data.query);

        return params;
      });
    }
    if (!data.query) {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  }

  useEffect(() => {
    if (querySearch) {
      setValue('query', querySearch);
    }
  }, [querySearch]);

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export default SearchForm;
