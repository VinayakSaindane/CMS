export const getData = async ({
    contentType,
    entryUid,
    params={},
    includeAllReferences=false,
    // referenceFieldUID,
  }: {
    contentType: string;
    entryUid?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: { [key: string]: any };
    includeAllReferences?:boolean;
    referenceFieldUID?:string;
  }) => {
    try {
      // console.log("entryuid0", entryUid);  
      console.log("pppppp",JSON.stringify(params))
      // const defaultLocale = 'en-us';
     
      const query = params
      ? Object.keys(params)
          .map(key => `${key}=${params[key].toString()}`)
          .join('&')
      : '';
      console.log("blog query",query)
  
      const url = entryUid
        ? `${process.env.CONTENTSTACKHOST}v3/content_types/${contentType}/entries/${entryUid}?${includeAllReferences? "include_all=true":""}locale=en-us${query ? `&${query}` : ''}`
        : `${process.env.CONTENTSTACKHOST}v3/content_types/${contentType}/entries?&include[]=author&locale=en-us${query ? `&${query}` : ''}`;
        
        // const url = entryUid
        // ? `${process.env.CONTENTSTACK_HOST}v3/content_types/${contentType}/entries/${entryUid}?&include[]=${referenceFieldUID}locale=en-us${query ? `&${query}` : ''}`
        // : `${process.env.CONTENTSTACK_HOST}v3/content_types/${contentType}/entries?include[]=bltd20e24f01050d83c&locale=en-us${query ? `&${query}` : ''}`;
        
        console.log("blog url:",url)
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'api_key': process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || '',
          'access_token': process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || '',
        },
        cache: 'no-store',
      });
      // console.log(response);
  
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      return entryUid ? data.entry : data.entries;
    } catch (error) {
      console.error('getData error:', error);
      return entryUid ? null : [];
    }
  };