import customHistory from '../../components/CustomHistory'

export default function useHistory() {
    customHistory.listen((location) => console.log('history?  ', location))
}
