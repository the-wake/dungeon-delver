import { gql } from '@apollo/client';

export const QUERY_CAMPAIGNS = gql`
  query getCampaigns {
    getCampaigns {
      _id
      name
      dungeons {
          _id
          name
      }
      is_active
      user {
        _id  
        username
      }
    }
  }
`;

export const QUERY_SINGLE_CAMPAIGN = gql`
  query getCampaign($_id: ID!) {
    getCampaign(_id: $_id) {
      _id
      name
      dungeons {
          _id
          name
      }
      is_active
    }
  }
`;

export const QUERY_DUNGEONS = gql`
    query getDungeons {
        getDungeons {
            _id
            name
            rooms {
                _id
                name
            }
            campaign {
                _id
                name
            }
            is_active
            user {
                _id
                username
            }
        }
    }
`;

export const QUERY_SINGLE_DUNGEON = gql`
    query getDungeon($_id: ID!) {
        getDungeon(_id: $_id) {
            _id
            name
            rooms {
                _id
                name
            }
            campaign {
                _id
                name
            }
            is_active
        }
    }
`;

export const QUERY_ROOMS = gql`
    query getRooms($dungeon: ID!) {
        getRooms(dungeon: $dungeon) {
            _id
            name
            blurb
            creatures {
                _id
                name
            }
            dungeon {
                _id
                name
            }
            is_active
        }
    }
`;

export const QUERY_SINGLE_ROOM = gql`
    query getRoom($_id: ID!) {
        getRoom(_id: $_id) {
            _id
            name
            blurb
            creatures {
                _id
                name
            }
            dungeon {
                _id
                name
            }
            is_active
        }
    }
`;

export const QUERY_CREATURES = gql`
    query getCreatures($room: ID!) {
        getCreatures(room: $room) {
            _id
            name
            hp
            loot
            key_npc
            is_alive
            is_active
            room {
                _id
                name
            }
        }
    }
`;

export const QUERY_SINGLE_CREATURE = gql`
    query getCreature($_id: ID!) {
        getCreature(_id: $_id) {
            hp
            name
            loot
            key_npc
            is_alive
            is_active
            room {
                _id
                name
            }
        }
    }
`;


export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      campaigns {
        _id
        name
        is_active
        dungeons {
            _id
          name
        }
      }
    }
  }
`;
