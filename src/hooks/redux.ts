import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import { AppDispatch } from '../store/store'
import { GamesState } from '../types/games.types'

export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<GamesState> = ()=> useSelector;