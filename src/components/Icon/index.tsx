import React from "react";

import {
  useDynamicSVGImport,
  UseDynamicSVGImportOptions
} from '../../hooks/useDynamicSVGImport';


interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  onCompleted?: UseDynamicSVGImportOptions["onCompleted"];
  //onError?: UseDynamicSVGImportOptions["onError"];
}

const Icon: React.FC<IconProps> = ({
  name,
  onCompleted,
  //onError,
  ...rest
}): any | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    //onError
  });
  console.log('svg prev', name)
  if (error) {
    console.log(error.message)
    return error.message;
  }
  // if (loading) {
  //   console.log("Loading...")
  //   return "Loading...";
  // }
  if (SvgIcon) {
    console.log('svg done', SvgIcon)
    return <SvgIcon {...rest} />;
  }
  return null;
};

export default Icon