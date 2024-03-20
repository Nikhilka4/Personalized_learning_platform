import { useEditLayoutMutation, useGetHeroDataQuery } from '@/redux/features/layout/layoutApi';
import React from 'react'

type Props = {}

const EditCategories = (props: Props) => {

    const { data, isLoading } = useGetHeroDataQuery("Categories", {
        refetchOnMountOrArgChange: true,
      });
    
      const [editLayout, { isSuccess: layoutSuccess, error }] =
        useEditLayoutMutation();
  return (
    <div>EditCategories</div>
  )
}

export default EditCategories