import { useContext, useEffect, useRef, useState } from "react";
import { DemoContext } from "../context/DemoProvider";
import { useUnmount } from 'ahooks';

const fullScreenMap = {};
function useFullscreen(id?: string) {

  const idRef = useRef(id || Math.random().toString());
  const { demoContext } = useContext(DemoContext)
  const [fullscreen, setFullscreen] = useState(fullScreenMap[idRef.current]);


  useEffect(() => {
    fullScreenMap[idRef.current] = [fullscreen, setFullscreen];
  }, [fullscreen, setFullscreen])


  useUnmount(() => {
    delete fullScreenMap[idRef.current];
  })


  useEffect(() => {
    if (!demoContext.canvas) {
      for (const key in fullScreenMap) {
        fullScreenMap[key][0] = false;
        fullScreenMap[key][1](false);
      }
    }
  }, [demoContext.canvas])

  return [fullscreen, (value) => {
    for (const key in fullScreenMap) {
      fullScreenMap[key][0] = false;
      fullScreenMap[key][1](false);
    }

    fullScreenMap[idRef.current] = value;
    setFullscreen(value);
  }]
}


export default useFullscreen;