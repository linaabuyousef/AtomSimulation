import math

def convert_to_cartesian(row):
    r = float(row['r'])
    phi = float(row['phi'])
    theta = row.get('theta')  # This will return None for 2D case
    
    if theta is None:  # 2D case
        x = r * math.cos(phi)
        y = r * math.sin(phi)
        z = 0
    else:  # 3D case
        theta = float(theta)
        x = r * math.sin(theta) * math.cos(phi)
        y = r * math.sin(theta) * math.sin(phi)
        z = r * math.cos(theta)
    
    return {'x': -x / 1e-8, 'y': -y / 1e-8, 'z': -z / 1e-8}

def read_electron(electron_type, dimensions):

    electron_type = electron_type+'.txt'
    with open(electron_type, 'r') as f:
        lines = f.readlines()

    rows = []
    orbits = []
    for line in lines:
        parts = line.split()
        row = {
            't': float(parts[1]),
            'r': parts[3],
            'rPrime': parts[5],
            'rDoublePrime': parts[7],
            'phi': parts[9],
            'phiPrime': parts[11],
        }
        if dimensions == '3D':
            row.update({
                'theta': parts[13],
                'thetaPrime': parts[15],
                'thetaDoublePrime': parts[17],
            })
        row.update({'deltaPhi': parts[-1]})
        rows.append(row)
        orbits.append(convert_to_cartesian(row))
    return rows, orbits

def get_electrons(electron_type, N, K, dimension):

    electrons = []

    if dimension == '3D':
        for i in range(0, K+1):
            file_name = electron_type + dimension +  'N' + str(N) + 'K' + str(K) + 'M' + str(i)
            data, orbits = read_electron(file_name, dimension)
            electrons.append({
                "data": data,
                "orbits": orbits,
                "M": i
            })

    else:
       
       for i in range(1, K+1):
            file_name = electron_type + dimension +  'N' + str(N) + 'K' + str(i)
            data, orbits = read_electron(file_name, dimension)
            electrons.append({
                "data": data,
                "orbits": orbits
            })
    
    return electrons 

         