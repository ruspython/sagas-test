import {
  LOAD_SECTION,
  LOAD_SECTION_SUCCESS,
  OPEN_NEXT_SUBSECTION,
  OPEN_PREV_SUBSECTION
} from './constants';


export function loadSection() {
  return {
    type: LOAD_SECTION
  };
}

export function openNextSubsection() {
  return {
    type: OPEN_NEXT_SUBSECTION
  };
}

export function openPrevSubsection() {
  return {
    type: OPEN_PREV_SUBSECTION
  };
}

export function sectionLoaded(section) {
  return {
    type: LOAD_SECTION_SUCCESS,
    section
  }
}