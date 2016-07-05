import {
  LOAD_SECTION,
  LOAD_SECTION_SUCCESS
} from './constants';


export function loadSection() {
  return {
    type: LOAD_SECTION
  };
}

export function sectionLoaded(section) {
  return {
    type: LOAD_SECTION_SUCCESS,
    section
  }
}