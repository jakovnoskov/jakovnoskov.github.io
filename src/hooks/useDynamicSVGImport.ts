import React, { useEffect, useRef, useState, useCallback } from "react";
//import svg from '../assets/svg/skills/'
export interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => void;
  onError?: (err: Error) => void;
}

export function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  //console.log(`./${name}.svg`)
  //`../assets/svg/skills/${name}.svg`
  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const urlPrp = `./${name}.svg`

    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await require(urlPrp) as any
        ).ReactComponent;

        //await import(`../assets/svg/skills/${name}.svg`)
        console.log('url', urlPrp)


        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        console.log(err)
        //onError?.(err);
        //setError(err);
      } finally {
        setLoading(false);
      }
    };
    console.log('end', `./${name}.svg`)
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}

//export default useDynamicSVGImport