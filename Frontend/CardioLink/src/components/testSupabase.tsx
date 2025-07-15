'use client';

import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

const TestSupabase = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('readings').select('*');
      if (error) console.error('Supabase Error:', error);
      else console.log('Fetched data:', data);
    };

    fetchData();
  }, []);

  return null;
};

export default TestSupabase;
